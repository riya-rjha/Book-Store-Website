import mongoose from "mongoose";

//creating Schemas : document's properties, values, types of data

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },

    },
    {
        timestamps : true
    }
);
    
export const Cat = mongoose.model('Cal', bookSchema);