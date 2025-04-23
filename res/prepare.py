import os
import sys
import numpy as np
import cv2 as cv
from matplotlib import pyplot as plt

imgName = sys.argv[1]
imgNameNoExt = os.path.splitext(imgName)[0]

img = cv.imread(imgName)
height, width, channels = img.shape

y=0
x=0

imLeft = cv.flip(img[y:int(height/2), x:width].copy(),1)
imRight = cv.flip(img[int(height/2):height, x:width].copy(),1)

stereo = cv.StereoBM_create(numDisparities=48, blockSize=67)

imLeft_gray=cv.cvtColor(imLeft, cv.COLOR_BGR2GRAY)
imRight_gray=cv.cvtColor(imRight, cv.COLOR_BGR2GRAY)


disparity = stereo.compute(imLeft_gray,imRight_gray)

params = [cv.IMWRITE_JPEG_QUALITY, 85]

#cv.imwrite("./"+imgNameNoExt+"-disp.jpg", disparity)
cv.imwrite("../public/stereoscopic/"+imgNameNoExt+"-left.jpg", imLeft, params)
cv.imwrite("../public/stereoscopic/"+imgNameNoExt+"-right.jpg", imRight, params)