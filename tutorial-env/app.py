from __future__ import unicode_literals
from flask import Flask, render_template, send_from_directory

import youtube_dl

app = Flask(__name__)

ydl_opts = {
    'format': 'bestaudio/best',
    'outtmpl': str('/audio/test.webm'),
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
}

test1 = str('/audio/test.webm')

test2 = str('/audio/test2.webm')

c=0

@app.route("/")
def main():
    return render_template('html/index.html')


@app.route("/play/<id>")
def play(id):
    global c
    if len(id) > 0 :
        downloadMp3(id)
        c += 1
    return "done"


@app.route("/file/<name>")
def getFile(name):
    return send_from_directory('audio', name)

def downloadMp3(id):
    global c
    if c % 2 == 0 :
        ydl_opts['outtmpl'] = test1
    else:
        ydl_opts['outtmpl'] = test2
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        ydl.download(['https://www.youtube.com/watch?v='+id])



if __name__ == "__main__":
    app.run(host= '0.0.0.0')