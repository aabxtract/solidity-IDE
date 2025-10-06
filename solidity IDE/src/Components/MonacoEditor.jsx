import React, { useEffect, useRef } from 'react';
import { Code2 } from 'lucide-react';

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
          minimap: { enabled: true },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          padding: { top: 16, bottom: 16 },
          fontFamily: 'JetBrains Mono, Fira Code, monospace',
          cursorBlinking: 'smooth',
          smoothScrolling: true,
          renderLineHighlight: 'all',
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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 px-6 py-3 border-b border-gray-700/50 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-semibold text-gray-200">contract.sol</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
      </div>
      <div 
        ref={editorRef} 
        className="w-full"
        style={{ height: '600px' }}
      />
    </div>
  );
};

export default MonacoEditor;