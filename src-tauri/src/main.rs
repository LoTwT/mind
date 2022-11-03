#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use extd::{extract_td, ExtractResult};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn fetch_title_description(link: &str) -> Result<ExtractResult, String> {
  let result = extract_td(link);
  match result {
    Ok(result) => Ok(result),
    _ => Err(String::from("something wrong")),
  }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, fetch_title_description])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
