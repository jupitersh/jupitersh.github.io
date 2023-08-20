#!/usr/bin/python3

import os
import re
from glob import glob


os.chdir('/home/ubuntu/hexo/source/img/article_image/2020/2020-09-28')

filenames = []
for filename in glob('*.png', recursive=True):
    filenames.append(filename)

for filename in filenames:
	name = filename.split('.')[0]
	os.system('cwebp %s -o %s.webp' % (filename, name))
