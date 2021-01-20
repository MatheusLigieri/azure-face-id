##!/usr/bin/env bash

docker run -e POSTGRES_USER=root -e POSTGRES_PASSWORD=Tubar@01 -e POSTGRES_DB=face_id -p 5432:5432 postgres;