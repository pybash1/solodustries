from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

import auth
import clients
import expenses
import resources

api = FastAPI(title="Solodustries API", description="Solodustries' API", version="1.0.0")

api.include_router(auth.router, tags=["Authentication"])
api.include_router(clients.router, tags=["Clients"])
api.include_router(expenses.router, tags=["Expenses"])
api.include_router(resources.router, tags=["Resources"])
api.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


@api.route("/")
async def index(_):
    return JSONResponse({"ok": True}, 200)