// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { GoogleGenerativeAI } from "@google/generative-ai";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // get the git extension api
  const gitExtension = vscode.extensions.getExtension("vscode.git")?.exports;
  if (!gitExtension) {
    vscode.window.showErrorMessage("Git extension not found.");
    return;
  }
  const git = gitExtension.getAPI(1);

  // Register the command
  const disposable = vscode.commands.registerCommand(
    "git-auto-commit-generator.generateCommitMessage",
    async () => {
      if (git.repositories.length === 0) {
        vscode.window.showErrorMessage("No git repository found.");
        return;
      }

      const repo = git.repositories[0];

      // Get the staged changes
      const changes = await repo.diff(true);

      if (!changes || changes.length === 0) {
        vscode.window.showInformationMessage("No staged changes found.");
        return;
      }

      // call gemini api
      vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Notification,
          title: "Generating commit message...",
          cancellable: false,
        },
        async (progress) => {
          try {
            const commitMessage = await callGemini(changes);
            repo.inputBox.value = commitMessage;
          } catch (error) {
            vscode.window.showErrorMessage(
              `Error generating commit message: ${error}`
            );
          }
        }
      );
    }
  );

  context.subscriptions.push(disposable);
}

async function callGemini(diffText: string): Promise<string> {
  try {
    const apiKey = "Enter Your API Key Here"; // Replace with your actual API key

    const genAi = new GoogleGenerativeAI(apiKey || "");

    const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `Write a short, professional git commit message based on this diff. 
    Follow the conventional commits format (e.g., feat: add login). 
    Keep it concise. Diff:\n${diffText}`;

    const responses = await model.generateContent(prompt);
    if (
      !responses.response.candidates ||
      !responses.response.candidates[0].content.parts[0].text
    ) {
      throw new Error("No response from Gemini API");
    }
    return responses.response.candidates[0].content.parts[0].text?.trim();
  } catch (error) {
    throw new Error(`API call failed: ${error}`);
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}
