const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UnicornSchema = Schema({
	name: String,
	color: String,
	forests: [
        {
            type: Schema.ObjectId,
            ref: 'forests'
        }
    ]
});

module.exports = mongoose.model('unicorns', UnicornSchema);


