FROM busybox:latest

RUN mkdir -p /opt/app
RUN mkdir -p /opt/app/src
RUN mkdir -p /opt/app/target
RUN touch /opt/app/pom.xml

RUN ls -lah
RUN chown 1000:1000 /opt/app/target
CMD ["sh"]
