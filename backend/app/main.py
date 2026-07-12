from fastapi import FastAPI
from app.core.config import settings


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION
)


@app.get("/")
def root():
    return {
        "message": "TransitOps Backend is Running 🚀"
    }
from app.models import User