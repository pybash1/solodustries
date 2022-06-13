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
    return db.get_resources(user["key"])


@router.post("/create/resource")
def create_resource(resource: Resource, user=Depends(manager)):
    return db.create_update_resource(user["key"], resource, str(int(uuid.uuid4())))


@router.put("/update/resource/{rid}")
def update_resource(rid: str, resource: Resource, user=Depends(manager)):
    return db.create_update_resource(user["key"], resource, rid)


@router.delete("/delete/resource/{rid}")
def delete_resource(rid: str, _=Depends(manager)):
    return db.delete_resource(rid)


@router.get("/log/{rid}")
def get_resource(rid: str, _=Depends(manager)):
    return db.get_resource(rid)
