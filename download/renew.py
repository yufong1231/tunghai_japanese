#!/usr/bin/env python
# coding: utf-8

# In[43]:


number = input('第幾回？')
date = input('日期？')
title = input('標題？')
pdf = input('PDF 名稱,需包含.pdf（ex. 自律学習実践研究会2018-1ポスター.pdf）')
c = input('是否有PPT可供下載？（Y/N）')
download = []
while(c != 'N'):
    name = input('PPT 作者？')
    link = input('PPT 名稱,需包含.pdf（.pptx）（ex. 実践１-1-阿部.pdf）')
    download.append({'name': name, 'link': './download/'+link})
    c = input('是否有PPT可供下載？（Y/N）')


# In[44]:


new = {
    'number': number,
    'date': date,
    'title': title,
    'pdf': './download/'+pdf,
    'download': download
}


# In[46]:


import json, codecs


# In[47]:


with open('../data/page7.json' , 'r') as reader:
    jf = json.loads(reader.read())


# In[48]:


jf.append(new)


# In[49]:


# print(jf)


# In[30]:


with open('../data/page7.json', 'wb') as outfile:
    json.dump(jf, codecs.getwriter('utf-8')(outfile), ensure_ascii=False)
