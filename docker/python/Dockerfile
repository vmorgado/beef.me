FROM python:alpine

EXPOSE 80

# Install gunicorn
RUN pip install gunicorn

# Install falcon
RUN pip install falcon

# Add demo app
VOLUME '/home/beef.me'
WORKDIR '/home/beef.me'

CMD ["gunicorn", "-b", "0.0.0.0:80", "main:app"]