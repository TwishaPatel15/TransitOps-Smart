from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "TransitOps Smart"
    PROJECT_VERSION: str = "1.0.0"
    DATABASE_URL: str = "postgresql://postgres:Twisha15@localhost:5432/transitops"
    SECRET_KEY: str = "change_this_secret_key"


settings = Settings()