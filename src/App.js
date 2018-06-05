import React, {Component} from 'react';
import Chip from './Chip';
import Section from './Section';
import Media from './Media';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exploring Treemaps</h1>
          <h2 className="App-subtitle">For summarizing and Navigating Image Galleries</h2>
          <div className="Chips">
            <Chip man={"Luis Mesa"} imageRoute={"./LuisMesa.jpg"}/>
            <Chip man={"John Guerra"} imageRoute={"./JohnGuerra.jpg"}/>
          </div>
        </header>
        <div>
          <div className="container">
            <Section sectionTitle={"Description"}
                     sectionContent={"Treemaps are an important, useful and unexplored tool to\n" +
                     "navigate and visualize image galleries. Because of this,\n" +
                     "the propose of this project is to document, test and\n" +
                     "improve the PhotoTreeMap, a tool to display image\n" +
                     "collections based on the images metadata. This tool has\n" +
                     "been developed as a JavaScript library by Dr. Jhon Guerra\n" +
                     "and is able to organize groups of images based on its\n" +
                     "metada."}/>
            <Media className="image-media" actions={[{link: 'https://github.com/john-guerra/photoTreemap', name: 'Code'}]} mediaImage="./PTMDemoBasicExample1.gif"/>
            <Section sectionTitle={"Problem"}
                     sectionContent={"Visualize and navigate big image collections with rich\n" +
                     "metadata. The majority of systems used to navigate and\n" +
                     "summarize images repositories use a basic approach of\n" +
                     "displaying equally-sized thumbnails in a bi-dimensional\n" +
                     "grid. However, this widely used solution does not scale\n" +
                     "well and does not give the user a meaningful and intuitive\n" +
                     "interaction.\n"}
            />
            <Section sectionTitle={"Solution"}
                     sectionContent={"The proposed solution is a visualization library based on\n" +
                     "treemaps, which allows users to navigate through its\n" +
                     "image repositories in a straightforward way and give them\n" +
                     "richest context results using the images' metadata. In\n" +
                     "order to achieve this, the work will be done upon the\n" +
                     "PhotoTreeMap system developed by Dr. John Guerra.\n"}/>
            <div className="deliverables-title">
              <h2>Deliverables</h2>
            </div>
            <div className="deliverables-container-1">
              <Media className="deliverables-media" actions={[{link: './PosterTesisv1.pptx.pdf', name: 'DOWLAND'}]} mediaImage="./paper.jpg" mediaTitle="IEEE VIS PAPER"/>
              <Media className="deliverables-media" actions={[{link: './exploring-treemaps-summarizing.pdf', name: 'DOWLAND'}]} mediaImage="./poster.jpg" mediaTitle="Poster"/>
            </div>
            <div className="deliverables-container-2">
              <Media className="deliverables-media" actions={[{link: 'https://github.com/john-guerra/photoTreemap/tree/master/examples/basic', name: 'CODE'},{link: 'https://john-guerra.github.io/photoTreemap/examples/basic/index.html', name: 'DEMO'}]} mediaImage="./PTMDemoBasicExample1.gif" mediaTitle="Animals"/>
              <Media className="deliverables-media" actions={[{link: 'https://github.com/john-guerra/photoTreemap/tree/master/examples/ptm-instagram-comparison', name: 'CODE'},{link: 'https://john-guerra.github.io/photoTreemap/examples/ptm-instagram-comparison/build/index.html', name: 'DEMO'}]} mediaImage="./PTMInstagramTrends.gif" mediaTitle="Instagram Trends"/>
              <Media className="deliverables-media" actions={[{link: 'https://github.com/john-guerra/photoTreemap/tree/master/examples/ptm-moma', name: 'CODE'},{link: 'https://john-guerra.github.io/photoTreemap/examples/ptm-moma/build/index.html', name: 'DEMO'}]} mediaImage="./PTMMomaNavigator2.gif" mediaTitle="Moma Navigator"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
