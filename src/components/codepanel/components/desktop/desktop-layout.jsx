import React from 'react';
import { useSelector } from 'react-redux';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';

import Topbar from './topbar';
import Bottombar from './bottombar';

const DesktopLayout = ({ editor, preview, slider, slideChangeHandler }) => {
  const isPreviewVisible = useSelector(
    (state) => state.codepanel.isPreviewVisible
  );
  const { ...slides } = useSelector((state) => state.codepanel.slides);
  const currentSlideNumber = useSelector(
    (state) => state.codepanel.currentSlide
  );
  const lastSlidesNumber = slides.slides.length - 1;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <Topbar />
      <ReflexContainer
        flex={1}
        orientation="vertical"
        style={{ width: '100%', height: '100%' }}
      >
        <ReflexElement flex={1} style={{ borderRadius:'4%'}}>
          {!!currentSlideNumber && (
            <button
              className="slide_btn slide_btn-top"
              value={'top'}
              onClick={slideChangeHandler}
            ></button>
          )}
          {slider}
          {!(currentSlideNumber === lastSlidesNumber) && (
            <button
              className="slide_btn slide_btn-bottom"
              value={'bottom'}
              onClick={slideChangeHandler}
            ></button>
          )}
        </ReflexElement>

        <ReflexElement flex={1} style={{ borderRadius:'4%',  marginLeft: 7}}>{editor}</ReflexElement>
        {isPreviewVisible ? (
          <>
            <ReflexElement flex={1} style={{ borderRadius:'4%',  marginLeft: 7}}>{preview}</ReflexElement>
          </>
        ) : null}
      </ReflexContainer>
      <Bottombar />
    </div>
  );
};

export default DesktopLayout;
