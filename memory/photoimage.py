import tkinter as tk

root=tk.Tk()

root.title("PthotoImage")
root.geometry("250x250")

card_back_img=tk.PhotoImage(file="Cards/cardBack_blue1.png")

canvas_1=tk.Canvas(root,width=240,height=200)
canvas_1.pack()

canvas_1.create_image(120,100,
                      image=card_back_img,
                      anchor="center")
root.mainloop()