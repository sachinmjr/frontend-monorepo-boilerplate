/**
 * Copies the given text to the clipboard.
 *
 * @param text - The text to copy to the clipboard.
 * @returns A promise that resolves when the text has been copied successfully.
 */
export async function copyToClipboard(text: string): Promise<void> {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback method for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Prevents scrolling to the bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      console.log("Text copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  }
  