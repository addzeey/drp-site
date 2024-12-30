interface WysiwygEditorProps {
    content: string;
    onContentChange: (content: string) => void;
}

import { useEffect, useState } from 'react';
import Editor from 'react-simple-wysiwyg';

export const WysiwygEditor = ({ content, onContentChange }: WysiwygEditorProps) => {
    const [html, setHtml] = useState<string>('');

    useEffect(() => {
        if (content !== "") {
            setHtml(content);
        }
    }, [content]);

    function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const newContent = e.target.value;
        setHtml(newContent);
        onContentChange(newContent);
    }

    return (
        <Editor value={html} onChange={onChange} />
    );
};