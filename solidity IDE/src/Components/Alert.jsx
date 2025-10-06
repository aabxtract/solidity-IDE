import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Alert = ({ type, message, title }) => {
  const styles = {
    error: 'bg-red-900/50 border-red-700 text-red-200',
    success: 'bg-green-900/50 border-green-700 text-green-200',
    info: 'bg-blue-900/50 border-blue-700 text-blue-200'
  };

  const icons = {
    error: <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />,
    success: <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />,
    info: <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
  };

  return (
    <div className={`${styles[type]} border rounded-lg p-4 mb-4 flex items-start gap-3`}>
      {icons[type]}
      <div className="text-sm">
        {title && <strong>{title}</strong>}
        <pre className="whitespace-pre-wrap">{message}</pre>
      </div>
    </div>
  );
};

export default Alert;