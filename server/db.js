var fs = require('fs');

function Read(tableName) {
    try {
        const data = fs.readFileSync(`./tables/${tableName}.json`, "utf8");

        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

function Write(data, tableName) {
    fs.writeFile(`./tables/${tableName}.json`, JSON.stringify(data), () => {});
}

class DBData {
    constructor(identificator) {
        this.identificator = identificator;
        this.Data = Read(this.identificator);
    }

    Save = () => {
        Write(this.Data, this.identificator);
    }

    Find = (id) => {
        return this.Data[this.Data.findIndex(item => item.id === id)];
    }

    GetNextId = () => {
        let nextId = Math.max(...this.Data.map(item => item.id)) + 1;
        if (nextId > 0)
            return nextId;
        return 0;
    }

    Add = (newElement) => {
        this.Data.push({ id: this.GetNextId(), ...newElement });
    }
}

class Messages extends DBData {
    constructor() {
        super("messages")
    }

    GetMessagesToBlog = (blogId) => {
        return this.Data.filer(message => message.blogId === blogId)
    }

    Add = (ownerId, blogId, text = null, date = null) => {
        if (typeof(ownerId) === 'number' || ownerId < 0 || typeof(blogId) === 'number' || blogId < 0) {
            throw "Should be owner and blog";
        }

        super.Add({
            ownerId,
            blogId,
            text,
            date
        })
    }
}


class Blogs extends DBData {
    constructor() {
        super("blogs")
    }

    Add = (ownerId, question, date = null) => {
        if (typeof(ownerId) === 'number' || ownerId < 0 || typeof(question) === 'string') {
            throw "Should be owner";
        }

        super.Add({
            ownerId,
            question,
            date
        })
    }
}

class Users extends DBData {
    constructor() {
        super("users")
    }

    Add = (name, surname, nickName = null, age = null, information = null, avatar = null, date = null) => {
        if (typeof(name) === 'string' || typeof(surname) === 'string') {
            throw "Should be name and surname";
        }

        super.Add({
            name,
            surname,
            nickName,
            age,
            information,
            avatar,
            date
        })
    }
}

module.exports.Read = Read;
module.exports.Write = Write;

module.exports.Users = Users;
module.exports.Blogs = Blogs;
module.exports.Messages = Messages;