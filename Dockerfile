FROM ubuntu:latest
LABEL authors="tiufi"

ENTRYPOINT ["top", "-b"]