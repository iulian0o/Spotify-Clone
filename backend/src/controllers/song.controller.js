import { Song } from '../models/song.model.js';

export const getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 })

    res.status(200).json(songs)
  } catch (error) {
    next(error);
  }
}

export const getFeaturedSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 6 }
      },
      {
        $project: {
          _id: 1,
          title: 1,
          imageUrl: 1,
          audioUrl: 1
        }
      }
    ])

    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
}

// for the future: implement algorithm to pick recomandations for specific user

export const getMadeForYouSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 }
      },
      {
        $project: {
          _id: 1,
          title: 1,
          imageUrl: 1,
          audioUrl: 1
        }
      }
    ])

    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
}

export const getTrendingSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 }
      },
      {
        $project: {
          _id: 1,
          title: 1,
          imageUrl: 1,
          audioUrl: 1
        }
      }
    ])

    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
}
