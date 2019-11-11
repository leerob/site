import React, {useState, useEffect} from 'react';

import loadDb from '../lib/load-db';

import Views from './views';

function ViewCounter({id}) {
    const [views, setViews] = useState('');

    useEffect(() => {
        const onViews = (newViews) => setViews(newViews.val());
        let db;

        const fetchData = async () => {
            db = await loadDb();
            db.child(id).on('value', onViews);
        };

        fetchData();

        return function cleanup() {
            db.child(id).off('value', onViews);
        };
    }, [id]);

    useEffect(() => {
        const registerView = () => fetch(`https://leerob-blog-views.now.sh/?id=${encodeURIComponent(id)}`);

        registerView();
    }, [id]);

    return <Views views={views} />;
}

export default ViewCounter;
