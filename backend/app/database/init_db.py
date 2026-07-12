from app.database.session import engine
from app.models.base import Base
from app.models import User


def init_db():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    init_db()