import React, {Component} from "react";
import {Container, FileInfo, Preview} from './styles'
import {CircularProgressbar} from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"></Preview>
        <div>
          <strong>#</strong>
          <span>64kb</span>
        </div>
        
      </FileInfo>
        
        <div>
          <CircularProgressbar
            styles={{
              root : { width : 24 },
              path : { stroke : '#7159c1' }
            }}
            strokeWidth={10}
            percentage={60} />
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer">
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>

          <MdCheckCircle size={24} color="#222" />
          <MdError size={24} color="#e57878" />
        </div>
    </li>
  </Container>
)

export default FileList;