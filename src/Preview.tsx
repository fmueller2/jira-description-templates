import React, {useState, useEffect} from 'react';
import './Preview.css';

interface PreviewProps {
  template: DescriptionTemplate
}

function Preview(props: PreviewProps) {
  const [loading, setLoading] = useState(true);
  const [renderedTemplate, setRenderedTemplate] = useState<string>('');

  const renderApiUrl = window.location.protocol + '//' + window.location.host + '/rest/api/1.0/render';

  useEffect(() => {
    setLoading(true);
    fetch(renderApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rendererType: 'atlassian-wiki-renderer',
        unrenderedMarkup: props.template.content
      })
    })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      setRenderedTemplate(data);
      setTimeout(() => setLoading(false), 300);
    })
    .catch((e) => {
      setLoading(false);
      console.error('Fetching rendered template content through JIRA API failed: ', e);
    });
  }, [props.template]);

  return (
    <div className="jt-preview">
      <h6>Preview</h6>
      <div className="jt-preview-rendered">
        { loading
          ? <p>loading…</p>
          : <div dangerouslySetInnerHTML={{ __html: renderedTemplate }} />
        }
      </div>
    </div>
  );

}

export default Preview;