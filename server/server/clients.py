import os
import uuid

from fastapi import APIRouter, Depends

from auth import manager
from models import Client
from db import ClientDB

router = APIRouter()
db = ClientDB(os.getenv("DETA_KEY"), "solodustries-clients")


@router.get("/clients")
def get_clients(user=Depends(manager)):
    return db.get_logs(user["key"])


@router.post("/create/client")
def create_client(client: Client, user=Depends(manager)):
    return db.create_update_log(user["key"], client, str(int(uuid.uuid4())))


@router.put("/update/client/{cid}")
def update_client(cid: str, client: Client, user=Depends(manager)):
    return db.create_update_log(user["key"], client, cid)


@router.delete("/delete/client/{lid}")
def delete_client(cid: str, _=Depends(manager)):
    return db.delete_log(cid)


@router.get("/log/{cid}")
def get_client(cid: str, _=Depends(manager)):
    return db.get_log(cid)
