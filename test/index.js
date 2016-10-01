var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,
	chaiAsPromised = require('chai-as-promised'),
	pynode = require('../index');

describe('Test runs', () => {

	it('it should run the specified file and return contents', (done) => {
		var res = pynode.exec(__dirname + '/../' + 'test.py');

		res.then((d) => {
			try{
				d = d[0].replace(/\r?\n|\r/g, '').replace(/'/g, '"');
				expect(d).to.equal('hello');
				done();
			}catch(e){
				done(e);
			}
		});

	});

	it('it should run the w/o directory name and return contents', (done) => {
		var res = pynode.exec('test.py');

		res.then((d) => {
			try{
				d = d[0].replace(/\r?\n|\r/g, '').replace(/'/g, '"');
				expect(d).to.equal('hello');
				done();
			}catch(e){
				done(e);
			}
		});

	});

	it('it should return the array of print statements from python', (done) => {
		var res = pynode.exec('second.py');

		res.then((d) => {
			const shouldbe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
			try{
				d = d[0].replace(/\r?\n|\r/g, '').replace(/'/g, '"');
				d = JSON.parse(d);
				expect(d).to.be.instanceof(Array);
				expect(d).to.deep.equal(shouldbe);
				done();
			}catch(e){
				done(e);
			}
		})

	});

	it('should fail with no file found', (done) => {
		expect(pynode.exec('somename.py'))
			.to.be.rejected;
			// .to.be.an.instanceof('Error');
		done();
	})

})