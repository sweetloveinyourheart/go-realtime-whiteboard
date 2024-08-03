"use client";
import { Tldraw } from 'tldraw';

function BoardPage() {
    return (
        <div style={{ position: 'fixed', inset: 0 }}>
            <Tldraw />
        </div>
    );
}

export default BoardPage;