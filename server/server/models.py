from types import NoneType
from pydantic import BaseModel


class UserLogin(BaseModel):
    email: str
    password: str


class UserRegister(BaseModel):
    email: str
    password: str
    desc: str
    title: str
    name: str


class Client(BaseModel):
    name: str
    email: str
    status: str
    phone: str


class Expense(BaseModel):
    item: str
    client: NoneType | str
    type: str
    amount: float


class Resource(BaseModel):
    name: str
    paid: bool
    link: str