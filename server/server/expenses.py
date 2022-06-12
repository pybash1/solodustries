import os
import uuid

from fastapi import APIRouter, Depends

from auth import manager
from models import Expense
from db import ExpenseDB

router = APIRouter()
db = ExpenseDB(os.getenv("DETA_KEY"), "solodustries-expenses")


@router.get("/expenses")
def get_expense(user=Depends(manager)):
    return db.get_logs(user["key"])


@router.post("/create/expense")
def create_expense(expense: Expense, user=Depends(manager)):
    return db.create_update_log(user["key"], expense, str(int(uuid.uuid4())))


@router.put("/update/expense/{eid}")
def update_expense(eid: str, expense: Expense, user=Depends(manager)):
    return db.create_update_log(user["key"], expense, eid)


@router.delete("/delete/expense/{eid}")
def delete_expense(eid: str, _=Depends(manager)):
    return db.delete_log(eid)


@router.get("/log/{eid}")
def get_expense(eid: str, _=Depends(manager)):
    return db.get_log(eid)
