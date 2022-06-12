from typing import Dict, Union

from deta import Deta
import bcrypt

from models import Client

class UserExistsException(Exception):
    pass

class AuthDB:
    def __init__(self, deta_key: str, db_name: str) -> None:
        self.deta = Deta(deta_key)
        self.db = self.deta.Base(db_name)

    def create_user(self, email: str, password: str, desc: str, title: str, name: str, hash: bool = True) -> Dict[str, str]:
        if hash:
            password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

        if self.db.get(email) is not None:
            raise UserExistsException("User already exists")
        self.db.put({"password": password.decode(), "name": name, "title": title, "desc": desc}, email)
        return {"email": email, "password": password}

    def get_user(self, email: str) -> Union[Dict[str, str], None]:
        if email == "":
            return None
        return self.db.get(email)

    def check_password(self, email: str, password: str) -> bool:
        user = self.db.get(email)
        return bcrypt.checkpw(password.encode(), user["password"].encode())


class ClientDB:
    def __init__(self, deta_key: str, db_name: str) -> None:
        self.deta = Deta(deta_key)
        self.db = self.deta.Base(db_name)

    def get_clients(self, email: str) -> Dict[str, str]:
        return self.db.fetch({"email": email}).items

    def create_update_client(self, email: str, client: Client, cid: str) -> Dict[str, str]:
        test = self.db.put({"email": email, "client": {"name": client.name, "status": client.status, "phone": client.phone, "email": client.email}}, cid)
        print(test)
        return {"email": email, "client": client, "cid": cid}

    def delete_client(self, cid: str) -> Dict[str, str]:
        self.db.delete(cid)
        return {"cid": cid}

    def get_client(self, cid: str) -> Dict[str, str]:
        return self.db.get(cid)


class ExpenseDB:
    def __init__(self, deta_key: str, db_name: str) -> None:
        self.deta = Deta(deta_key)
        self.db = self.deta.Base(db_name)

    def get_expenses(self, email: str) -> Dict[str, str]:
        return self.db.fetch({"email": email}).items

    def create_update_expense(self, email: str, expense: str, eid: str) -> Dict[str, str]:
        test = self.db.put({"email": email, "expense": {"item": expense.item, "type": expense.type, "client": expense.client, "amount": expense.amount}}, eid)
        print(test)
        return {"email": email, "expense": expense, "lid": eid}

    def delete_expense(self, eid: str) -> Dict[str, str]:
        self.db.delete(eid)
        return {"lid": eid}

    def get_expense(self, eid: str) -> Dict[str, str]:
        return self.db.get(eid)


class ResourceDB:
    def __init__(self, deta_key: str, db_name: str) -> None:
        self.deta = Deta(deta_key)
        self.db = self.deta.Base(db_name)

    def get_resources(self, email: str) -> Dict[str, str]:
        return self.db.fetch({"email": email}).items

    def create_update_resource(self, email: str, resource: str, rid: str) -> Dict[str, str]:
        test = self.db.put({"email": email, "resource": {"name": resource.name, "paid": resource.paid, "link": resource.link}}, rid)
        print(test)
        return {"email": email, "resource": resource, "lid": rid}

    def delete_resource(self, rid: str) -> Dict[str, str]:
        self.db.delete(rid)
        return {"lid": rid}

    def get_resource(self, rid: str) -> Dict[str, str]:
        return self.db.get(rid)