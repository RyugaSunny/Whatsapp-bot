<a href="https://ibb.co/pQNpmwN"><img src="[https://i.ibb.co/xYwQ4Lw/cheemspic.jpg](https://cdn.anime-planet.com/characters/primary/coral-q-1-190x266.jpg?t=1625994295)" alt="Coral Q" border="0"></a>
<h1 align="center">⭐Coral Q⭐<br></h1>

<p align="center"> 
  YO, I am "Coral Q " a WhatsApp bot made by Ayush to do everything that is possible on WhatsApp based on WhatsApp Multi Device(MD) Support.
</p>
</br>

### ✧✧ This bot is still under development so if you want to recode/modify it, pls check this main repo once in 3 days because i am continuously debugging it and making major changes in it.
</br>

## ```Connect With Me```

<p align="center">

<a href="https://api.whatsapp.com/send?phone=919931122319&text=𝘩𝘦𝘭𝘭𝘰+𝘮𝘢𝘴𝘵𝘦𝘳"><img src="https://img.shields.io/badge/Contact Ayush-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />

</p>



## ```Bot Support Groups```
<p align="center">

<a href="https://wa.me/+16469305635"><img src="https://img.shields.io/badge/Join support group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />

</p>


# Install Manually 👇

## `Requirements`

* [Node.js](https://nodejs.org/en/)

* [Git](https://git-scm.com/downloads)

* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)

* [Libwebp](https://developers.google.com/speed/webp/download)

* Any text editor

## ` BUILDPACKS`

```


https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

https://github.com/clhuang/heroku-buildpack-webp-binaries.git

```

## `For Termux/Ssh/Ubuntu`

```bash

apt update

apt upgrade

pkg update && pkg upgrade

pkg install bash

pkg install libwebp

pkg install git -y

pkg install nodejs -y 

pkg install ffmpeg -y 

pkg install wget

pkg install yarn

pkg install imagemagick -y

git clone https://github.com/RyugaSunny/Whatsapp-bot.git

cd Whatsapp-bot

rm -rf session

npm i

npm start

```

## `For 24/7 Activation (Termux)`

```bash

npm i -g pm2 && pm2 start  index.js && pm2 save && pm2 logs

```
