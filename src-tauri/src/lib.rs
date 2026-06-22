// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn create_data_dir() -> Result<(), String> {
    std::fs::create_dir_all("D:\\LmTv\\Demos")
        .map_err(|e| e.to_string())?;

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_fs::init()) // 新增
        .invoke_handler(tauri::generate_handler![greet, create_data_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
