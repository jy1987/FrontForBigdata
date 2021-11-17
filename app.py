# -*- coding: utf-8 -*-

from flask import Flask, request
from flask_restx import Api, Resource, Namespace
import pickle
import pandas as pd
from infos import Infos


app = Flask(__name__)
api = Api(
    app,
    version="1.0",
    title="predict time's API Server",
    description="JYD bigdata API Server",
    terms_url="/",
    contact="87jy1015@gmail.com",
    license="yd networks",
)  # Flask 객체에 api 객체 등록

api.add_namespace(Infos, "/infos")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
