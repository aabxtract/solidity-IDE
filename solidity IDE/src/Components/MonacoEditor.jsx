import React, { useEffect, useRef } from 'react';

const MonacoEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    const loadMonaco = async () => {
      if (window.monaco) {
        initEditor();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.require.config({ 
          paths: { 
            vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' 
          } 
        });
        
        window.require(['vs/editor/editor.main'], () => {
          monacoRef.current = window.monaco;
          initEditor();
        });
      };
    };

    const initEditor = () => {
      if (editorRef.current && window.monaco && !editorInstanceRef.current) {
        const editor = window.monaco.editor.create(editorRef.current, {
          value: value,
          language: 'sol',
          theme: 'vs-dark',
          automaticLayout: true,
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          wordWrap: 'on',
        });

        editor.onDidChangeModelContent(() => {
          onChange(editor.getValue());
        });

        editorInstanceRef.current = editor;
      }
    };

    loadMonaco();

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.dispose();
        editorInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="bg-gray-750 px-4 py-2 border-b border-gray-700">
        <span className="text-sm font-medium">contract.sol</span>
      </div>
      <div 
        ref={editorRef} 
        className="w-full"
        style={{ height: '500px' }}
      />
    </div>
  );
};

export default MonacoEditor;