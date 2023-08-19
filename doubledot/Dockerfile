FROM python:3.9.6-alpine

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
    && apk add postgresql-libs postgresql-dev libffi-dev \
       openldap-dev unixodbc-dev gcc musl-dev python3-dev \
       jpeg-dev zlib-dev libjpeg

RUN python3 -m pip install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt


COPY . /app
EXPOSE 8000
