describe('beefMembers', function() {


  describe('beefMember Constructor Function', function() {
    let polishedbeefMember;
    before(() => {
      polishedbeefMember = new beefMember("Mr. Polished", "New York", "law")
    })
    it('can create a beefMember with a name, home state, and training', function() {
      expect(polishedbeefMember).to.be.an.instanceof(beefMember)
      expect(polishedbeefMember.name).to.equal("Mr. Polished")
      expect(polishedbeefMember.homeState).to.equal("New York")
      expect(polishedbeefMember.training).to.equal("law")
    })
  })

  describe('veto()', function() {
    let polishedbeefMember;
    before(() => {
      polishedbeefMember = new beefMember("Mr. Polished", "New York", "law")
    })
    it('returns "No, I must disagree"', function() {
      expect(polishedbeefMember.veto()).to.equal("No, I must disagree")
    })
  })

  describe('approve()', function() {
    let polishedbeefMember;
    before(() => {
      polishedbeefMember = new beefMember("Mr. Polished", "New York", "law")
    })
    it('returns "You can do that!"', function() {
      expect(polishedbeefMember.approve()).to.equal("You can do that!")
    })
  })

  describe('doCharity()', function() {
    let polishedbeefMember;
    before(() => {
      polishedbeefMember = new beefMember("Mr. Polished", "New York", "law")
    })
    it('returns "I like to help people."', function() {
      expect(polishedbeefMember.doCharity()).to.equal("I like to help people.")
    })
  })

  describe('releasePressStatement()', function() {
    let polishedbeefMember;
    before(() => {
      polishedbeefMember = new beefMember("Mr. Polished", "New York", "law")
    })
    it('returns "You will see great things from Scuber."', function() {
      expect(polishedbeefMember.releasePressStatement()).to.equal("You will see great things from Scuber.")
    })
  })

  describe('sayHi()', function() {
    let polishedbeefMember;
    before(() => {
      polishedbeefMember = new beefMember("Mr. Polished", "New York", "law")
    })
    it('returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>."', function() {
      expect(polishedbeefMember.sayHi()).to.equal("Hi, my name is Mr. Polished. I am from New York, and I was trained in law.")
    })
  })
})

