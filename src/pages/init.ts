import { mkdir } from "@tauri-apps/plugin-fs";
import { BaseDirectory } from "@tauri-apps/plugin-fs";

export async function initUserData() {
    await mkdir("test", {
        baseDir: BaseDirectory.AppData,
        recursive: true,
    });
}