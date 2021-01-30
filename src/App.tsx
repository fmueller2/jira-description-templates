import React, { useState, useEffect } from 'react';
import Preview from './Preview';
import Selector from './Selector';
import './App.css';
import IconTemplate from './template.svg';

function App() {
  const [isActive, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState<DescriptionTemplate>({
    id: 'missing',
    name: 'Loading',
    content: 'Templates not loaded'
  });
  const [templateList, setTemplateList] = useState<DescriptionTemplate[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://raw.githubusercontent.com/Bike24/jira-description-templates/main/data/jira-description-templates.json')
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        const templates: Array<DescriptionTemplate> = data;
        setTemplateList(templates);
        data.length && setTemplate(templates[0]);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log('Jira Description Templates: Fetching templates failed: ', e);
      });
  }, []);

  const handleToggleState = (): void => setActive(!isActive);

  const handleApply = () => {
    const descriptionContainer = document.getElementById('description-wiki-edit');

    if (!descriptionContainer) {
      alert('No applicable editor found!');
      return;
    }

    const editor = descriptionContainer.querySelector('textarea');
    const textModeButton = descriptionContainer.querySelectorAll('.editor-toggle-tabs ul.aui-nav a')[1];
    const visualModeButton = descriptionContainer.querySelectorAll('.editor-toggle-tabs ul.aui-nav a')[0];

    if (editor && textModeButton && visualModeButton) {
      (textModeButton as HTMLElement).click();
      editor.value = template.content;
      (visualModeButton as HTMLElement).click();
      handleToggleState();
    }
  }

  return (
    <div className={'jt-app' + (isActive ? ' active' : '')}>
      <header className="jt-app-header">
        <div className="jt-app-loader">
          <button onClick={handleToggleState}>
            <IconTemplate fill="#fff" height="20" width="20" viewBox="0 0 1000 1000" />
          </button>
        </div>
      </header>
      <div className="jt-app-body">
        <h6>Choose template</h6>
        {loading
          ? <p>loading…</p>
          : <>
              <Selector current={template} list={templateList} onChange={setTemplate} />
              <Preview template={template} />
              <button onClick={handleApply}>Apply</button>
              <button className="cancel"
                      onClick={handleToggleState}>Cancel</button>
            </>
          }
        <footer>
          Create a <a href="https://github.com/Bike24/jira-description-templates/edit/main/data/jira-description-templates.json"
                      target="_blank">Pull Request</a> to add new templates.
        </footer>
      </div>
    </div>
  )
}

export default App;