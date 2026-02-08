import e from 'express';
import express from 'express';

const router = express.Router();

// Define routes for subjects
router.get('/', async (req, res) => {

    try {

    } catch (error) {
        console.error(`Error fetching subjects: ${error}`);
        res.status(500).json({ error: 'Failed to fetch subjects' });
    }

});