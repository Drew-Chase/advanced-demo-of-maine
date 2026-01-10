use anyhow::Result;
use serde::Deserialize;

const ENV_JSON_CONTENT: &str = include_str!("../env.json");

#[derive(Deserialize, Debug)]
pub struct Env {
    contact_smtp: Smtp,
    noreply_smtp: Smtp,
}

#[derive(Deserialize, Debug)]
pub struct Smtp {
    host: String,
    port: u16,
    username: String,
    password: String,
}

impl Env {
    pub fn new() -> Result<Self> {
        Ok(serde_json::from_str(ENV_JSON_CONTENT)?)
    }
}
