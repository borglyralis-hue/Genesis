import React, { useMemo, useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';

const GenealogyPrototype = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const familyData = useMemo(() => [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' },
        { id: '3', name: 'Alice Johnson' },
        { id: '4', name: 'Bob Brown' },
    ], []);

    const links = useMemo(() => [
        { source: '1', target: '2' },
        { source: '1', target: '3' },
        { source: '2', target: '4' },
    ], []);

    const filteredNodes = familyData.filter(node => node.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="p-4">
            <input 
                type="text" 
                className="border p-2 mb-4"
                placeholder="Search for a person..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ForceGraph2D
                graph={{ nodes: filteredNodes, links }}
                nodeAutoColorBy="id"
                width={800}
                height={600}
            />
        </div>
    );
};

export default GenealogyPrototype;