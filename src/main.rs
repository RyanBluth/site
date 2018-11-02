extern crate actix_web;
extern crate env_logger;

use actix_web::middleware::Logger;
use actix_web::{server, App, HttpRequest, HttpResponse};
use actix_web::fs::StaticFiles;
use actix_web::http;

fn main() {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    server::new(|| {
        App::new()
            .resource("/", |r| r.method(http::Method::GET).f(|_| {
                HttpResponse::Found()
                    .header("LOCATION", "/index.html")
                    .finish()
            }))
            .middleware(Logger::default())
            .middleware(Logger::new("%a %{User-Agent}i"))
            .handler("/m", StaticFiles::new("static").unwrap())
            .handler("/", StaticFiles::new("client/build/").unwrap())
    }).bind("127.0.0.1:8088")
    .unwrap()
    .run();
}
