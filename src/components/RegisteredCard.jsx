import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Upload, FileText, CheckCircle } from 'lucide-react';

const RegisteredCard = ({ hackathon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-4 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <CheckCircle className="text-emerald-500" size={20} />
          <h3 className="font-bold text-slate-800">{hackathon.name}</h3>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="p-5 border-t border-slate-100 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-500 mb-1 font-medium">Hackathon Link</p>
              <a href={hackathon.link} className="text-indigo-600 hover:underline text-sm break-all">
                {hackathon.link}
              </a>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-dashed border-slate-300 flex flex-col items-center">
              <Upload className="text-slate-400 mb-2" size={24} />
              <p className="text-xs text-slate-500 mb-3">Upload your submission PPT</p>
              <label className="cursor-pointer bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-indigo-700 transition-colors">
                {fileUploaded ? "Change File" : "Choose File"}
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={() => setFileUploaded(true)} 
                  accept=".ppt,.pptx"
                />
              </label>
              {fileUploaded && (
                <div className="mt-2 flex items-center text-emerald-600 text-xs font-medium">
                  <FileText size={12} className="mr-1" /> PPT Uploaded
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredCard;