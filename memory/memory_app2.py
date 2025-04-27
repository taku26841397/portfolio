import tkinter as tk
from tkinter import messagebox
import random
import re


#カードの画像ファイル表示
files=[
  'cardClubs1.png',
  'cardClubs2.png',
  'cardClubs3.png',
  'cardClubs4.png',
  'cardClubs5.png',
  'cardHearts1.png',
  'cardHearts2.png',
  'cardHearts3.png',
  'cardHearts4.png',
  'cardHearts5.png'
]

#グローバル変数
#一枚目に選択したカードの数字
first_card=None
#１枚目に選択したカードの番号
first_index=None
card_img=[]
cards=[]
count=0


#初期化関数
def initialise():
  global first_card
  global first_index
  global count

  first_card=None
  first_index=None
  count=len(files) / 2
  random.shuffle(files)  #カードのシャッフル

  #カードの生成
  card_img.clear()
  cards.clear()

  for num, img_name in enumerate(files):
    card_img.append(
      tk.PhotoImage(file='Card\\' + img_name)
    )
    #カードの表示にCanvasウィジェットを使用
    cards.append([tk.Canvas(
      root,
      width=140,
      height=190
    ),None])
    card_set(num,False)


def card_set(num,flag):
  if flag:
    cards[num][0].delete('all')
    cards[num][0].create_image(
      0,
      0,
      anchor='nw',
      image=card_img[num])
  else:
    cards[num][0].delete('all')
    cards[num][0].create_image(
      0,
      0,
      anchor='nw',
      image=card_back_img
    )
  
  cards[num][0].bind(
    '<ButtonPress-1>',
    lambda event: click_img(event,num)
  )

  r, n=0, num
  if num>4:
    r,n=1,num-5
  cards[num][0].grid(row=r,colum=n)
  cards[num][1]=flag


#ハンドラ関数
def click_img(event,num):
  global first_card
  global first_index
  global count

  #既に表になっている場合は終了
  if cards[num][1]:
    return

  #カードを表面（True)にする
  card_set(num,True)
  if first_card !=None:
    #ファイル名から数字を抜き出す
    second_card=re.sub(r'\D','',files[num])
    #同じ数字なら
    if second_card==first_card:
      count=count-1
      if count>0:
        messagebox.showinfo(
          'Memory App',
          '同じです！'
        )
      else:
        messagebox.showinfo(
          'Memory App',
          'すべてそろいました！'
        )
        initialise()
    else:
      messagebox.showinfo(
        'Memory App',
        '違います！'
      )
      card_set(num,False)
      card_set(first_index,False)
    first_card, first_index=None, None
  else:
    first_index=num
    #ファイル名から数字を抜き出す
    first_card=re.sub(r'\D','',files[num])

