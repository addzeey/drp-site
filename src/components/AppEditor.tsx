import React, { useState } from 'react';
import { Editor } from 'react-simple-wysiwyg';

export const AppEditor = () => {
    const [editorContent, setEditorContent] = useState("");

    const handleChange = (content) => {
        setEditorContent(content);
    };

    return (
        <div>
            <Editor
                value={editorContent}
                onChange={handleChange}
            />
            <button onClick={() => saveContentToSupabase(editorContent)}>Save</button>
        </div>
    );
}