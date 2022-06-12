import os
import uuid

from fastapi import APIRouter, Depends

from auth import manager
from models import Resource
from db import ResourceDB

router = APIRouter()
db = ResourceDB(os.getenv("DETA_KEY"), "solodustries-resources")


@router.get("/resources")
def get_resources(user=Depends(manager)):
    return db.get_logs(user["key"])


@router.post("/create/resouce")
def create_resource(resource: Resource, user=Depends(manager)):
    return db.create_update_log(user["key"], resource, str(int(uuid.uuid4())))


@router.put("/update/resource/{rid}")
def update_resource(rid: str, resource: Resource, user=Depends(manager)):
    return db.create_update_log(user["key"], resource, rid)


@router.delete("/delete/resource/{rid}")
def delete_resource(rid: str, _=Depends(manager)):
    return db.delete_log(rid)


@router.get("/log/{rid}")
def get_resource(rid: str, _=Depends(manager)):
    return db.get_log(rid)
