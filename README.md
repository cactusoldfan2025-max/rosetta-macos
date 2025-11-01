# rosetta-macos
translate windows to macOS!
# 🪟 Rosetta for Intel Macs

**Run Windows apps and games on macOS — no Virtual Machine needed.**  
Rosetta is a lightweight macOS app built for **Intel Macs** that lets you launch `.exe` files easily using Wine.

---

## ✨ Features
- Simple drag & drop interface — no Terminal needed  
- Uses Wine automatically from `/opt/local/bin/wine`  
- Supports most Windows `.exe` apps and games  
- Translates Windows APIs (DirectX, Win32, .NET) into macOS-friendly systems  
- 100% free and open-source  

---

## 🧠 How It Works
Rosetta uses Wine to “translate” Windows system calls into macOS-compatible ones.  
Think of it like a translator between Windows and macOS — Wine handles the compatibility layer, while Rosetta gives you a clean app interface.

---

## 💻 Requirements
- macOS **10.13 High Sierra** or later  
- **Intel Mac** (Rosetta is not for Apple Silicon yet)  
- Wine installed at `/opt/local/bin/wine`  
  - If you don’t have it, install via MacPorts:  
    ```bash
    sudo port install wine
    ```

---

## 🚀 Usage
1. Download the latest release by going to automator on your mac and copy pasting:  on run {input, parameters}
    -- Ask user to pick a .exe file if not using drag-and-drop
    if (count of input) is 0 then
        set theFile to choose file with prompt "Choose a Windows .exe file to run:" of type {"exe"}
    else
        set theFile to item 1 of input
    end if

    set winePath to "/opt/local/bin/wine"
    set exePath to POSIX path of theFile

    -- Run Wine with the selected .exe file
    do shell script quoted form of winePath & " " & quoted form of exePath & " &>/dev/null &"

    return input
end run and saving it as a application.
2. Open **Rosetta.app**  
3. Drag your `.exe` file onto the window — it’ll launch automatically!  

> Tip: You can set Rosetta as the default app for `.exe` files by right-clicking a `.exe` → **Get Info** → **Open With** → Rosetta → **Change All**

---

## 🛠️ Built With
- **Xcode** (Swift / AppleScript wrapper)
- **Wine** backend
- **macOS Cocoa** framework

---

## 📦 Folder Structure
